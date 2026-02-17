import { newSpecPage } from '@stencil/core/testing';
import { XjelinekjAmbulanceWlList } from '../xjelinekj-ambulance-wl-list';

describe('xjelinekj-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XjelinekjAmbulanceWlList],
      html: `<xjelinekj-ambulance-wl-list></xjelinekj-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XjelinekjAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
