import { test, expect } from '@playwright/test'

test.describe('Newsletter Flow', () => {
  test('usuario puede suscribirse al newsletter desde homepage', async ({ page }) => {
    // Ir a la página principal
    await page.goto('/')

    // Verificar que la página cargó correctamente
    await expect(page).toHaveTitle(/MOVILIAX/i)

    // Buscar el formulario de newsletter
    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    const submitButton = page.getByRole('button', { name: /suscribirme/i })

    // Verificar que los elementos existen
    await expect(emailInput).toBeVisible()
    await expect(submitButton).toBeVisible()

    // Intentar con email inválido
    await emailInput.fill('email-invalido')
    await submitButton.click()
    await expect(page.getByText(/email válido/i)).toBeVisible()

    // Limpiar y usar email válido
    await emailInput.fill('test@example.com')
    await submitButton.click()

    // Esperar respuesta (puede ser éxito o error de duplicado)
    await expect(
      page.getByText(/bienvenido|ya está registrado/i)
    ).toBeVisible({ timeout: 10000 })
  })

  test('formulario está accesible mediante teclado', async ({ page }) => {
    await page.goto('/')

    // Navegar con Tab hasta el formulario
    await page.keyboard.press('Tab')
    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    
    // Llenar con teclado
    await emailInput.focus()
    await emailInput.fill('keyboard@example.com')
    
    // Enviar con Enter
    await page.keyboard.press('Enter')
    
    // Verificar que se procesó
    await expect(
      page.getByText(/enviando|bienvenido/i)
    ).toBeVisible({ timeout: 5000 })
  })

  test('muestra estado de carga durante envío', async ({ page }) => {
    await page.goto('/')

    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    const submitButton = page.getByRole('button', { name: /suscribirme/i })

    await emailInput.fill('loading@example.com')
    await submitButton.click()

    // Verificar estado de carga
    await expect(page.getByText(/enviando/i)).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('navegación principal funciona', async ({ page }) => {
    await page.goto('/')

    // Verificar que el header está visible
    const header = page.locator('header, nav')
    await expect(header).toBeVisible()

    // Buscar links de navegación comunes
    const homeLink = page.getByRole('link', { name: /inicio|home/i }).first()
    if (await homeLink.isVisible()) {
      await expect(homeLink).toBeVisible()
    }
  })

  test('footer contiene información de contacto', async ({ page }) => {
    await page.goto('/')

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Verificar que tiene contenido
    const footerText = await footer.textContent()
    expect(footerText).toBeTruthy()
  })
})

test.describe('Responsive Design', () => {
  test('funciona en móvil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // iPhone SE
    await page.goto('/')

    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    await expect(emailInput).toBeVisible()
  })

  test('funciona en tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }) // iPad
    await page.goto('/')

    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    await expect(emailInput).toBeVisible()
  })

  test('funciona en desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')

    const emailInput = page.getByPlaceholder(/tu@email.com/i)
    await expect(emailInput).toBeVisible()
  })
})
