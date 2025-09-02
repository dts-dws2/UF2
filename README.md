# vitepress-template

Este proyecto utiliza [VitePress](https://vitepress.dev/) para documentación estática y está preparado para desplegarse automáticamente en GitHub Pages.

## Instalación

Instala las dependencias con:

```bash
npm install
```

## Uso

- Todo el contenido en formato Markdown debe estar en la carpeta `src/`.
- Los menús de navegación y la configuración general del sitio se gestionan en la carpeta [`src/.vitepress`](src/.vitepress/), especialmente en el archivo [`config.ts`](src/.vitepress/config.ts).
- Para desarrollo local:

  ```bash
  npm run dev
  ```

- Para construir la documentación para producción:

  ```bash
  npm run build
  ```

- Para previsualizar la build de producción:

  ```bash
  npm run serve
  ```

## Estructura recomendada

- `src/` — Contiene todo el contenido en Markdown.
- `src/.vitepress/config.ts` — Configuración de VitePress y menús de navegación.
- `src/index.md` — Página principal.

## Despliegue en GitHub Actions

El despliegue de la documentación es automático y ocurre en la misma rama `main` del repositorio. El workflow definido en `.github/workflows/deploy.yml` construye la documentación y la sube a la carpeta `docs/` en la rama `main` cada vez que haces push a `main`.

### Permisos necesarios para el workflow

Para que el workflow pueda subir los cambios generados automáticamente, es necesario que el token de GitHub (`GITHUB_TOKEN`) tenga permisos de **lectura y escritura** sobre el repositorio. Para habilitar estos permisos:

1. Ve a la configuración del repositorio en GitHub.
2. Entra en `Settings` > `Actions` > `General`.
3. Busca la sección **Workflow permissions**.
4. Selecciona **Read and write permissions**.
5. Guarda los cambios.

Con esto, el workflow podrá hacer commit y push de los archivos generados en la carpeta `docs/` tras cada build.
