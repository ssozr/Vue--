export default{
    props:['pages','getData'],
    template:`
    {{pages}}
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous"
        :class="{ disabled : !pages.has_pre}">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        v-for="page in pages.total_pages" :key ="page + 'page'"
        :class="{ active: page === pages.current_page }"
        @click.prevent = "getData(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"
        :class="{ disabled : !pages.has_next}">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav></div>`
}