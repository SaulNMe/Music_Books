import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create-author', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-author');
    assert.ok(route);
  });
});
