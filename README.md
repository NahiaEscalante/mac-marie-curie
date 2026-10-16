# MAC 2026 · Elemento 88

Página de la obra *Elemento 88*, sobre Marie Curie.
**Autora: Nahía Escalante.** Sitio estático en español, adaptable a móviles y
publicado con GitHub Pages.

Dirección para el QR: https://nahiaescalante.github.io/mac-marie-curie/

## Contenido y criterio editorial

La página incluye la obra ampliable, contexto biográfico, lectura de los
símbolos, cronología y enlaces a las fuentes consultadas.

- El episodio del Premio Nobel de Física de 1903 sigue el relato del American
  Institute of Physics: la propuesta de la Academia de Ciencias de Francia
  no la incluía, Gösta Mittag-Leffler alertó a Pierre Curie y este insistió en
  que fuera reconocida.
- La hoja del premio con el nombre tachado es una recreación artística, no un
  documento histórico.

El párrafo en cursiva de gran tamaño es una interpretación de la obra, no una
cita atribuida a Marie Curie. Las fuentes están al pie de la página.

## Edición y publicación

No requiere instalación de dependencias ni compilación. La página está en
`index.html`; el diseño y las interacciones están en `assets/site.css` y
`assets/site.js`.

Para verla localmente:

```sh
python3 -m http.server 8765
```

GitHub Pages publica la raíz de la rama `main`. Mantén el nombre del
repositorio para conservar la dirección del QR.

La imagen se sirve en dos tamaños (`curie-600.webp` y `curie.webp`) para
adaptarse a cada pantalla.

`publication.json` registra la dirección de publicación y `sitemap.xml`
enumera la página.
