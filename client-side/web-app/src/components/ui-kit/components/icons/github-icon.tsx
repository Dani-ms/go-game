import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconBase } from './base/icon-base';
import { IconProps } from './base/icon-types';

export function GithubIcon(props: IconProps) {
  return <IconBase icon={faGithub} {...props} />;
}
