import { Button, Text } from "@nextui-org/react";
import { Flex } from "../styles/flex";
import { useTranslation } from 'next-i18next'
import { ExamModal } from "./exam-modal";

export const Exams = () => {

  const { t } = useTranslation()

  return (
    <>
      <Flex
        css={{
          mt: "$5",
          px: "$6",
          "@sm": {
            mt: "$10",
            px: "$16",
          },
        }}
        justify={"between"}
        direction={"row"}
      >
        <Text h3>{t('exams')}</Text>
        <ExamModal />
      </Flex>
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
      </Flex>
    </>
  );
};

