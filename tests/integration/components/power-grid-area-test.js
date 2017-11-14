import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-grid-area', 'Integration | Component | power grid area', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{power-grid-area}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#power-grid-area}}
      template block text
    {{/power-grid-area}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
