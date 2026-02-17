import { newE2EPage } from '@stencil/core/testing';

describe('xjelinekj-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xjelinekj-ambulance-wl-list></xjelinekj-ambulance-wl-list>');

    const element = await page.find('xjelinekj-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
