// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkVersionBadge from './src/plugins/remark-version-badge.mjs';

/** @param {'startcloud' | 'switchboard'} section @param {string} slug */
const page = (section, slug) => `docs/${section}/${slug}`;

export default defineConfig({
  site: 'https://docs.switchboard.cloud',
  markdown: {
    remarkPlugins: [remarkVersionBadge],
  },
  // URLs from the retired Jekyll marketing pages, kept so old links still land somewhere useful.
  redirects: {
    '/': '/docs/',
    '/about': 'https://www.switchboard.cloud/',
    '/contact': 'https://www.switchboard.cloud/#contact',
    '/services': '/docs/',
    '/services/agents_ext': '/docs/switchboard/extensions/',
    '/services/call_records': '/docs/switchboard/call_records/',
    '/services/conferences': '/docs/switchboard/conferences/',
    '/services/ivr_queues': '/docs/switchboard/queues/',
    '/services/mobile_ext': '/docs/switchboard/extensions/',
    '/services/recordings': '/docs/switchboard/recordings/',
    '/services/voicemails': '/docs/switchboard/voicemails/',
    '/services/voip_phones': '/docs/switchboard/phone_config/',
    '/blog': 'https://www.switchboard.cloud/blog',
    '/blog/fraudulent_calls': 'https://www.switchboard.cloud/post/legal-consequences-for-making-fraudulent-calls',
    '/blog/ivr_queues': 'https://www.switchboard.cloud/post/how-an-ivr-manages-queues',
    '/blog/voip_advantages': 'https://www.switchboard.cloud/post/voip-pbx-phone-system',
    '/blog/3cx_softphones': 'https://www.switchboard.cloud/post/3cx-alternative',
    '/blog/elastix_complaints': 'https://www.switchboard.cloud/blog',
    '/blog/freepbx_complaints': 'https://www.switchboard.cloud/blog',
    '/blog/turbodial': 'https://www.switchboard.cloud/blog',
    '/blog/twilio_advantages': 'https://www.switchboard.cloud/blog',
    '/blog/voip_save_money': 'https://www.switchboard.cloud/blog',
  },
  integrations: [
    starlight({
      title: 'SwitchBoard Cloud™ Docs',
      description:
        'How to launch, configure and use SwitchBoard Cloud™, the cloud PBX phone system by STARTcloud™.',
      logo: { src: './src/assets/logo-mark.svg', alt: 'SwitchBoard Cloud' },
      // Same icon as switchboard.cloud (the Wix site), self-hosted in public/.
      favicon: '/favicon-32x32.png',
      customCss: ['./src/styles/theme.css'],
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      social: [
        { icon: 'email', label: 'Contact', href: 'https://www.switchboard.cloud/#contact' },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
          },
        },
      ],
      sidebar: [
        { label: 'Introduction', link: '/docs/' },
        {
          label: 'Launch an Instance',
          items: [
            { label: 'Overview', slug: page('startcloud', 'before_launch') },
            { label: 'First Steps', slug: page('startcloud', 'first_steps') },
            { label: 'Cloud Providers', slug: page('startcloud', 'cloud_providers') },
            { label: 'SSH Keys', slug: page('startcloud', 'ssh_key') },
            { label: 'Integrations', slug: page('startcloud', 'integrations') },
            { label: 'Twilio Connect', slug: page('startcloud', 'twilio') },
            { label: 'Microsoft 365', slug: page('startcloud', 'microsoft') },
            { label: 'Launch Your Instance', slug: page('startcloud', 'launch') },
          ],
        },
        {
          label: 'Get Started',
          items: [
            { label: 'Sign In', slug: page('switchboard', 'sign_in') },
            { label: 'Finding Your Way Around', slug: page('switchboard', 'navigation') },
            { label: 'Interface Configuration', slug: page('switchboard', 'interface_config') },
            { label: 'Internationalization', slug: page('switchboard', 'i18n') },
          ],
        },
        {
          label: 'Calls and Agents',
          items: [
            { label: 'Agents and Extensions', slug: page('switchboard', 'extensions') },
            { label: 'Set Up VoIP Phones', slug: page('switchboard', 'phone_config') },
            { label: 'Queues', slug: page('switchboard', 'queues') },
            { label: 'External Numbers', slug: page('switchboard', 'external_numbers') },
            { label: 'Conferences', slug: page('switchboard', 'conferences') },
            { label: 'Voicemails', slug: page('switchboard', 'voicemails') },
            { label: 'Recordings', slug: page('switchboard', 'recordings') },
            { label: 'Call Records', slug: page('switchboard', 'call_records') },
          ],
        },
        {
          label: 'Phone Lines',
          items: [
            { label: 'SIP Trunks', slug: page('switchboard', 'trunks') },
            { label: 'Inbound Routes', slug: page('switchboard', 'inbound_routes') },
            { label: 'Outbound Routes', slug: page('switchboard', 'outbound_routes') },
          ],
        },
        {
          label: 'AI and Integrations',
          items: [
            { label: 'Ask SwitchBoard', slug: page('switchboard', 'ask_switchboard') },
            { label: 'Answers and Question Sets', slug: page('switchboard', 'question_sets') },
            { label: 'API Integrations', slug: page('switchboard', 'integrations') },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Policy and Terms Updates', slug: page('switchboard', 'policy_updates') },
            { label: 'Competitors', slug: page('switchboard', 'competitors') },
          ],
        },
      ],
    }),
  ],
});
