class JwsFitFinder {
  constructor(root) {
    this.root = root;
    this.selects = Array.from(root.querySelectorAll('[data-jws-filter]'));
    this.cards = Array.from(root.querySelectorAll('[data-jws-product-card]'));
    this.empty = root.querySelector('[data-jws-empty]');
    this.count = root.querySelector('[data-jws-count]');
    this.clear = root.querySelector('[data-jws-clear]');
    this.selects.forEach((select) => select.addEventListener('change', () => this.filter()));
    if (this.clear) {
      this.clear.addEventListener('click', () => {
        this.selects.forEach((select) => {
          select.value = '';
        });
        this.filter();
      });
    }
    this.filter();
  }

  normalize(value) {
    return (value || '').toString().trim().toLowerCase();
  }

  cardMatches(card, key, value) {
    if (!value) return true;
    const haystack = this.normalize(card.dataset[key] || card.textContent);
    return haystack.includes(this.normalize(value));
  }

  filter() {
    const selected = {};
    this.selects.forEach((select) => {
      selected[select.dataset.jwsFilter] = select.value;
    });

    let visible = 0;
    this.cards.forEach((card) => {
      const match =
        this.cardMatches(card, 'helmetBrand', selected.helmetBrand) &&
        this.cardMatches(card, 'helmetModel', selected.helmetModel) &&
        this.cardMatches(card, 'cardo', selected.cardo) &&
        this.cardMatches(card, 'adapterType', selected.adapterType);

      card.hidden = !match;
      if (match) visible += 1;
    });

    if (this.empty) this.empty.hidden = visible !== 0 || this.cards.length === 0;
    if (this.count) {
      const productWord = visible === 1 ? 'product' : 'products';
      this.count.textContent = `${visible} matching ${productWord}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-jws-fit-finder]').forEach((root) => new JwsFitFinder(root));
});
