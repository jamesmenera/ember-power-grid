
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('grid-area', 'helper:grid-area', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{grid-area inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

