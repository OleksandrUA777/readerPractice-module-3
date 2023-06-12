import { Reader } from 'components/Reader/Reader';
import publications from '../publications.json';

export const App = () => {
  return (
    <>
      <Reader items={publications} />
    </>
  );
};
