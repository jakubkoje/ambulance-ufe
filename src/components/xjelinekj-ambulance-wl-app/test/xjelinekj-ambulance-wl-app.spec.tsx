import { newSpecPage } from '@stencil/core/testing';
import { XjelinekjAmbulanceWlApp } from '../xjelinekj-ambulance-wl-app';

describe('xjelinekj-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XjelinekjAmbulanceWlApp],
      html: `<xjelinekj-ambulance-wl-app base-path="/"></xjelinekj-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xjelinekj-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XjelinekjAmbulanceWlApp],
      html: `<xjelinekj-ambulance-wl-app base-path="/ambulance-wl/"></xjelinekj-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xjelinekj-ambulance-wl-list');
  });
});
