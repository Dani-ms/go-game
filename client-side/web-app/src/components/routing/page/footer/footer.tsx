import { PROJECT_NAME } from '@app/shared/project-details';

export function Footer() {
  return (
    <>
      <footer className={`bg-primary text-white w-100 pt-3`}>
        <div className=" w-100 container py-2 ">
          <div className="mr-auto mx-auto text-center container">
            <p className={`text-center`}>
              Copyright © {new Date().getFullYear()},{` `}
              {PROJECT_NAME}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
