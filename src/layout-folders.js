/**
 * Layout for manage and display Github repositories.
 *
 */
{
  layout.folders = new Layout('folders')
  layout.folders.html(`
  <header class="container">
    <h1><a href="">multi<span>BàO</span></a></h1>
    <div id="search-engine-wrapper" class="search-engine-wrapper" data-template="search">
    </div>
  </header>
  <main class="container">
    <div id="breadcrumb" class="breadcrumb" data-template="breadcrumb">
    </div>
    <section id="gh-list" class="gh-list" data-template="folders">
    </section>
  </main>`)
}
