import { newE2EPage } from '@stencil/core/testing';

describe('xjelinekj-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xjelinekj-ambulance-wl-app></xjelinekj-ambulance-wl-app>');

    const element = await page.find('xjelinekj-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
