import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconBase } from './base/icon-base';
import { IconProps } from './base/icon-types';

export function LinkedInIcon(props: IconProps) {
  return <IconBase icon={faLinkedin} {...props} />;
}
