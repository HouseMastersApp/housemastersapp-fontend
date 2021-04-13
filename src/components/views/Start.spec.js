// App.spec.js
import { shallowMount } from '@vue/test-utils';
import Start from './Start';

describe('App.vue', () => {
  it('mounts and renders', () => {
    const wrapper = shallowMount(Start);

    expect(wrapper.html()).toBeTruthy();
  });
});
