import { newSpecPage } from '@stencil/core/testing';
import { XjelinekjAmbulanceWlList } from '../xjelinekj-ambulance-wl-list';

describe('xjelinekj-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XjelinekjAmbulanceWlList],
      html: `<xjelinekj-ambulance-wl-list></xjelinekj-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xjelinekj-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xjelinekj-ambulance-wl-list>
    `);
  });
});
