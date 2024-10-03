import Image from "next/image"

const Logo = () => (
	<Image src="logo.png" alt="Our Logo" />
)

const PrimaryNavigation = ({ links }) => (
	<div>
		{links.map((link, index) => (
			<a href={link.page}>{link.name}</a>
		))}
	</div>
)

const SocialLinks = ({ socialAccounts }) => (
	<div>
		{socialAccounts.map((account, index) => (
			<a href={account.link}>{account.site}</a>
		))}
	</div>
)

const FullWidthSlider = ({ slides }) => (
	<div>
		{slides.map((slide, index) => (
			<a  href={slide.link}><img src={slide.image} alt={`Slide ${index}`} /></a>
		))}
	</div>
)

const Teaser = ({ thumbnail, text }) => (
	<div>
		<img src={thumbnail} alt="thumbnail" />
		<div>
			{text}
		</div>
 	</div>
)

const Header = ({ links, socialAccounts }) => (
	<div>
		<Logo />
		<PrimaryNavigation links={links} />
		<SocialLinks socialAccounts={socialAccounts} />
	</div>
)

const Content = ({ slides, teaserThumbnails, teaserTexts }) => (
	<div>
		<FullWidthSlider slides={slides} />
		<Teaser 
			thumbnail={teaserThumbnails[0]} 
			text={teaserTexts[0]} 
		/>
	</div>
)

const Footer = ({ socialAccounts }) => (
	<SocialLinks socialAccounts={socialAccounts} />
)
