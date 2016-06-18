{
  template.search = new Template('search')
  template.search.data = () => {
    template.search.html(`
      <div class="search-engine">
        <fieldset>
          <input id="gh-search" type="text" placeholder="Recherche">
          <input id="button-gh-search" value="Rechercher" type="submit">
        </fieldset>
      </div>
    `)
    template.search.events({
      'click #button-gh-search': () => {
        if (document.querySelector('#gh-search').value.length > 2) {
          const userQuery = document.querySelector('#gh-search').value
          const apiUrl = new GithubUrl(router.params).toGhApiSearch(userQuery)
          router.go(apiUrl.replace('https://api.github.com/', ''))
        }
      },
      'keypress #gh-search': evt => {
        if (evt.key === 'Enter' && evt.target.value.length > 2) {
          const userQuery = evt.target.value
          const apiUrl = new GithubUrl(router.params).toGhApiSearch(userQuery)
          router.go(apiUrl.replace('https://api.github.com/', ''))
        }
      }
    })
  }
}
