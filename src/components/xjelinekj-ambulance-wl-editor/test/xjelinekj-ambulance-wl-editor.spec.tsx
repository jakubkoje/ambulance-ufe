import { newSpecPage } from '@stencil/core/testing';
import { XjelinekjAmbulanceWlEditor } from '../xjelinekj-ambulance-wl-editor';

describe('xjelinekj-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [XjelinekjAmbulanceWlEditor],
      html: `<xjelinekj-ambulance-wl-editor entry-id="@new"></xjelinekj-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
