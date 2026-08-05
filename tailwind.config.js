/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			paper: 'var(--bg-primary)',
  			'paper-dark': 'var(--bg-tertiary)',
  			parchment: 'var(--parchment)',
  			'parchment-dark': 'var(--parchment-dark)',
  			ink: 'var(--ink)',
  			'ink-light': 'var(--ink-light)',
  			burgundy: 'var(--burgundy)',
  			'burgundy-dark': 'var(--burgundy-dark)',
  			oxblood: 'var(--burgundy)',
  			'oxblood-dark': 'var(--burgundy-dark)',
  			gold: 'var(--gold)',
  			'gold-light': 'var(--gold-light)',
  			saffron: 'var(--gold)',
  			'saffron-light': 'var(--gold-light)',
  			forest: 'var(--forest)',
  			navy: 'var(--navy)',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)'
  		},
  		fontFamily: {
  			display: [
  				'var(--font-fraunces)',
  				'Fraunces',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'var(--font-inter)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			accent: [
  				'var(--font-inter)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		maxWidth: {
  			measure: '65ch'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 1px)',
  			sm: 'calc(var(--radius) - 2px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}
