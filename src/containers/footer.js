import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="mailto: oursrapieure89@gmail.com " target="_blank">Email</Footer.Link>
          <Footer.Link href="https://www.instagram.com/fady.szn/" target="_blank">Instagram</Footer.Link>
          <Footer.Link href="https://discord.gg/MYEdsa8YJ4" target="_blank">Discord</Footer.Link>
          <Footer.Link href="https://twitter.com/nathusted" target="_blank">Twitter</Footer.Link>
          <Footer.Link href="https://www.youtube.com/channel/UCxx3TEWUik2XmB0dXzK0Csg" target="_blank">Youtube</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://amzn.to/3hRuvpX" target="_blank">Buy CronusZen</Footer.Link>
          <Footer.Link href="https://amzn.to/3huyaen" target="_blank">Buy Titan 2</Footer.Link>
          <Footer.Link href="https://amzn.to/3AIvWzH" target="_blank">Buy StrikePack</Footer.Link>
          <Footer.Link href="https://amzn.to/3e2NInp" target="_blank">Buy Xim Apex</Footer.Link>
          
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
          <Footer.Link href="#">Coming Soon</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
    </Footer>
  );
}
