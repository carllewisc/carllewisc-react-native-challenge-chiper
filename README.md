# Run App

- Descargar el Repositorio con los archivos fuentes.
- Abrir una terminal y escribir yarn o npm install para descargar las dependencias.
- Dirigirse a la carpeta de ios y correr el comando pop install o arch -x86_64 pod install (si tienes una mac M1).
- Para correr la app en Android escribir en la terminal yarn android o npm run android.
- Para correr la app en IOS escribir en la terminal yarn ios o npm run ios.

# Flujo de la aplicacion

- (Home) Al iniciar la aplicacion por completo aparece un lista con algunos posts, estos posts o
  publicaciones provienen
  de https://api.reddit.com/r/pics/hot.json
    - Los posts se pueden ordenar por algunas categorias: **New, Top, Hot, Controversial**.
    - El usuario puede navegar a un post o publicación en específico.

- (WebView) En esta pantalla, el usuario puede visualizar el link del post 'https://www.reddit.com/${link}'
    - El usuario, puede navegar por toda el post, ver comentarios, imagenes, información extra.

