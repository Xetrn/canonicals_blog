import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {
  ArticleStateType,
  defaultArticleState,
} from 'src/constants/articleProps';

import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';

const App = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [articleState, setArticleState] =
    useState<ArticleStateType>(defaultArticleState);

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setIsFormOpened(false);
      }
    };

    if (isFormOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpened]);

  return (
    <div
      className={clsx(styles.main)}
      style={{
        '--font-family': articleState.fontFamilyOption.value,
        '--font-size': articleState.fontSizeOption.value,
        '--font-color': articleState.fontColor.value,
        '--container-width': articleState.contentWidth.value,
        '--bg-color': articleState.backgroundColor.value,
      } as React.CSSProperties}
    >
      <div ref={formRef}>
        <ArticleParamsForm
          isFormOpened={isFormOpened}
          setIsFormOpened={setIsFormOpened}
          setArticleState={setArticleState}
        />
      </div>
      <Article onClick={() => setIsFormOpened(false)} />
    </div>
  );
};

export default App;
