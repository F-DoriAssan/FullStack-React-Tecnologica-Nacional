const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] iIPv6 localhost .
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 localhost por IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // El constructor de URL está disponible en todos los navegadores que admiten SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
    // Nuestro trabajador de servicio no funcionará si PUBLIC_URL está en un origen diferente
    // del que se muestra nuestra página. Esto podría suceder si se utiliza una CDN para 
    // servir activos; consulte https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Esto se ejecuta en localhost. Comprobemos si todavía existe un trabajador de servicio o no.
        checkValidServiceWorker(swUrl, config);

        // Agregue algunos registros adicionales a localhost, indicando a los desarrolladores la 
        // documentación del trabajador del servicio/PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // No es localhost. Simplemente registre al trabajador del servicio
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
          // En este punto, se ha obtenido el contenido actualizado en caché, 
          // pero el trabajador de servicio anterior seguirá entregando el contenido 
          // anterior hasta que se cierren todas las pestañas del cliente.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
            // En este punto, todo ha sido almacenado en caché. 
            // Es el momento perfecto para mostrar un 
            // "El contenido está almacenado en caché para su uso sin conexión". mensaje.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Compruebe si se puede encontrar al trabajador del servicio. Si no puede recargar la página.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then(response => {
      // Asegúrese de que exista el trabajador del servicio y de que realmente estemos obteniendo un archivo JS.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        /// No se encontró ningún trabajador de servicio. Probablemente una aplicación diferente. Vuelva a cargar la página.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Trabajador de servicio encontrado. Proceda normalmente.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
