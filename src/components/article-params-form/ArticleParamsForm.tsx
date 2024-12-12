import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from 'components/radio-group';
import { Select } from 'components/select';
import { Separator } from 'components/separator';
import { Spacing } from 'components/spacing';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';

import {
  ArticleStateType,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
  fontColors,
  fontFamilyOptions,
  fontSizeOptions,
  OptionType,
} from 'src/constants/articleProps';


type ArticleParamsFormProps = {
  isFormOpened: boolean;
  setIsFormOpened: Dispatch<SetStateAction<boolean>>;
  setArticleState: Dispatch<SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({
  isFormOpened,
  setIsFormOpened,
  setArticleState,
}: ArticleParamsFormProps) => {
  const [currentState, setCurrentState] =
    useState<ArticleStateType>(defaultArticleState);

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpened(false);
      }
    };

    if (isFormOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpened, setIsFormOpened]);

  return (
    <>
      <ArrowButton
        isOpened={isFormOpened}
        onClick={() => setIsFormOpened(!isFormOpened)}
      />
      <aside
        ref={formRef}
        className={clsx(
          styles.container,
          isFormOpened ? styles.container_open : ''
        )}
      >
        <form
          className={styles.form}
          onSubmit={(event: FormEvent) => {
            event.preventDefault();
            setArticleState(currentState);
          }}
          onReset={() => {
            setCurrentState(defaultArticleState);
            setArticleState(defaultArticleState);
          }}
        >
          <Text family="open-sans" weight={800} size={31} uppercase>
            Задайте параметры
          </Text>
          <Spacing size={50} />
          <Select
            title="Шрифт"
            options={fontFamilyOptions}
            selected={currentState.fontFamilyOption}
            onChange={(selected: OptionType) =>
              setCurrentState({ ...currentState, fontFamilyOption: selected })
            }
          />
          <Spacing size={50} />
          <RadioGroup
            name="size"
            title="Размер шрифта"
            options={fontSizeOptions}
            selected={currentState.fontSizeOption}
            onChange={(selected: OptionType) =>
              setCurrentState({ ...currentState, fontSizeOption: selected })
            }
          />
          <Spacing size={50} />
          <Select
            title="Цвет шрифта"
            options={fontColors}
            selected={currentState.fontColor}
            onChange={(selected: OptionType) =>
              setCurrentState({ ...currentState, fontColor: selected })
            }
          />
          <Spacing size={50} />
          <Separator />
          <Spacing size={50} />
          <Select
            title="Цвет фона"
            options={backgroundColors}
            selected={currentState.backgroundColor}
            onChange={(selected: OptionType) =>
              setCurrentState({ ...currentState, backgroundColor: selected })
            }
          />
          <Spacing size={50} />
          <Select
            title="Ширина контента"
            options={contentWidthArr}
            selected={currentState.contentWidth}
            onChange={(selected: OptionType) =>
              setCurrentState({ ...currentState, contentWidth: selected })
            }
          />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" type="reset" />
            <Button title="Применить" type="submit" />
          </div>
        </form>
      </aside>
    </>
  );
};
