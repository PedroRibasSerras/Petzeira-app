/** @format */
import { LogoWrapper, LogoImg, LogoName, LogoSubtitle } from './logo.css';

export default function Logo({ size, margin, enableImage, enableName, enableSubtitle}) {
	return (
		<LogoWrapper margin={margin}>
			{enableImage && <LogoImg size={ size || 300}></LogoImg>}
			{enableName && <LogoName>Petzeira</LogoName> }
			{enableSubtitle && <LogoSubtitle>Seu pet mais feliz!</LogoSubtitle> }
		</LogoWrapper>
	);
}
