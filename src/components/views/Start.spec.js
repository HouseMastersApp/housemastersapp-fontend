// App.spec.js
import { shallowMount } from '@vue/test-utils';
import Start from './Start';
import * as socialShare from "nativescript-social-share";
import MDIButton from "../button/MDIButton";

// Mock social share method.
jest.mock('nativescript-social-share', () => ({
  shareText: jest.fn()
}));

// Mock image picker.
jest.mock('nativescript-imagepicker', () => ({
  create: jest.fn(),
  authorize: jest.fn()
}));

// Mock camera
jest.mock('@nativescript/camera', () => ({
  takePicture: jest.fn(),
  requestPermissions: jest.fn()
}));



let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Start);
  //TODO: Import mocks file and set mocks.
});

describe('App.vue', () => {

  it('mounts and renders', () => {
    expect(wrapper.html()).toBeTruthy();
    //expect(wrapper.html()).toBe("slasfh");
  });
  
  it('shares correct text', async () =>  {
    const shareText = "Hey ik heb al ongeloofelijk veel punten gehaald deze week! Punten:";
    const points = 25;

    wrapper.setData({ shareText: shareText, points: points});

    await wrapper.find('[data-testid="shareBtn"]').vm.$emit('tap');

    expect(wrapper.find('[data-testid="shareBtn"]').emitted('tap')).toBeTruthy();


    expect(socialShare.shareText).toBeCalledWith(`${shareText}${points}`);
  });
}

);
