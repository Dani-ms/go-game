import Navbar from 'react-bootstrap/Navbar';
import { LinkAnchor } from 'src/components/ui-kit/protons/link-anchor/link-anchor';
import { INDEX_ROUTE } from 'src/components/templates/index/index-routes';
import { PROJECT_NAME } from '@app/shared/project-details';
import { GAME_ROUTE } from 'src/components/templates/memory-game/game-routes';

type Props = {
  menuHtmlId: string;
  className: string;
};

export function Header(props: Props) {
  return (
    <>
      <header className={`border-bottom ${props.className}`}>
        <Navbar>
          <LinkAnchor className="navbar-brand" href={INDEX_ROUTE.getHref()}>
            <span className="badge badge-primary">
              <span className="h5">{PROJECT_NAME}</span>
            </span>
          </LinkAnchor>
          <LinkAnchor className="navbar-brand" href={GAME_ROUTE.getHref()}>
            <span className="badge badge-primary">
              <span className="h5">{GAME_ROUTE.label}</span>
            </span>
          </LinkAnchor>
        </Navbar>
      </header>
    </>
  );
}
