import { newE2EPage } from '@stencil/core/testing';

describe('xjelinekj-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xjelinekj-ambulance-wl-editor></xjelinekj-ambulance-wl-editor>');

    const element = await page.find('xjelinekj-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
