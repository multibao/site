/**
 * Layout for manage and display Github repositories.
 *
 */
{
  layout.create('folders')
  layout.folders.html(`
  <header>
    <h1>multi<span>BàO</span></h1>
    <div id="search-engine-wrapper" class="search-engine-wrapper" data-template="search">
    </div>
  </header>
  <main>
    <div id="breadcrumb" class="breadcrumb" data-template="breadcrumb">
    </div>
    <section id="gh-list" class="gh-list" data-template="folders">
    </section>
  </main>`)
}
