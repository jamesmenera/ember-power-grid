import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-grid-modal', 'Integration | Component | power grid modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{power-grid-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#power-grid-modal}}
      template block text
    {{/power-grid-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
