// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkVersionBadge from './src/plugins/remark-version-badge.mjs';

/** @param {'startcloud' | 'switchboard'} section @param {string} slug */
const page = (section, slug) => `docs/${section}/${slug}`;

// Draft pages are left out of production builds, so their URLs redirect to the docs home there.
// In `astro dev` drafts still render, so writers can work on them; no redirect is added.
const isBuild = process.argv.includes('build');
/** @param {string[]} paths */
const hiddenUntilRewrite = (paths) =>
  isBuild ? Object.fromEntries(paths.map((p) => [`/docs/${p}`, '/docs/'])) : {};

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
    // Hidden until #4: these pages are drafts with outdated content. Remove this block
    // (and their draft: true) when the Launch an Instance rewrite is ready.
    ...hiddenUntilRewrite([
      'startcloud/before_launch',
      'startcloud/first_steps',
      'startcloud/cloud_providers',
      'startcloud/ssh_key',
      'startcloud/integrations',
      'startcloud/twilio',
      'startcloud/microsoft',
      'startcloud/launch',
      'switchboard/sign_in',
    ]),
  },
  integrations: [
    starlight({
      title: 'SwitchBoard Cloud™ Docs',
      description:
        'How to configure and use SwitchBoard Cloud™, the cloud PBX phone system by STARTcloud™.',
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
        // Hidden until #4: shown only in `astro dev`, so writers can reach the draft pages.
        ...(isBuild
          ? []
          : [
              {
                label: 'Draft: Launch an Instance',
                items: [
                  { label: 'Overview', slug: page('startcloud', 'before_launch') },
                  { label: 'First Steps', slug: page('startcloud', 'first_steps') },
                  { label: 'Cloud Providers', slug: page('startcloud', 'cloud_providers') },
                  { label: 'SSH Keys', slug: page('startcloud', 'ssh_key') },
                  { label: 'Integrations', slug: page('startcloud', 'integrations') },
                  { label: 'Twilio Connect', slug: page('startcloud', 'twilio') },
                  { label: 'Microsoft 365', slug: page('startcloud', 'microsoft') },
                  { label: 'Launch Your Instance', slug: page('startcloud', 'launch') },
                  { label: 'Sign In', slug: page('switchboard', 'sign_in') },
                ],
              },
            ]),
        {
          label: 'Get Started',
          items: [
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
            { label: 'Music on Hold', slug: page('switchboard', 'music_on_hold') },
            { label: 'External Numbers', slug: page('switchboard', 'external_numbers') },
            { label: 'Conferences', slug: page('switchboard', 'conferences') },
            { label: 'Voicemails', slug: page('switchboard', 'voicemails') },
            { label: 'Recordings', slug: page('switchboard', 'recordings') },
            { label: 'Call Records', slug: page('switchboard', 'call_records') },
            { label: 'Call Quality', slug: page('switchboard', 'call_quality') },
            { label: 'Messaging', slug: page('switchboard', 'messaging') },
          ],
        },
        {
          label: 'Phone Lines',
          items: [
            { label: 'SIP Trunks', slug: page('switchboard', 'trunks') },
            { label: 'Inbound Routes', slug: page('switchboard', 'inbound_routes') },
            { label: 'Phone Menus (IVR)', slug: page('switchboard', 'ivr') },
            { label: 'Caller Verification', slug: page('switchboard', 'caller_verification') },
            { label: 'Outbound Routes', slug: page('switchboard', 'outbound_routes') },
          ],
        },
        {
          label: 'AI and Integrations',
          items: [
            { label: 'AI Agents', slug: page('switchboard', 'ai_agents') },
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
