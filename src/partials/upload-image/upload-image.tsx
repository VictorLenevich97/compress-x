import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React from 'react';

import { FORMATS } from '@/constants/index';
import type { Values } from '@/types/utils';

import { IconArrow } from '../icons/icon-arrow/icon-arrow';

const Labels = {
  DEVICE: 'device',
} as const;

type LabelsType = Values<typeof Labels>;

export const UploadImage = () => {
  const [selectedOption, setSelectedOption] = React.useState(Labels.DEVICE);
  const [formatValue, setFormatValue] = React.useState('webp');

  const descriptionsMap = {
    [Labels.DEVICE]: 'Upload from your computer',
  };

  const labelsMap = {
    [Labels.DEVICE]: 'From device',
  };

  return (
    <>
      <div>
        <span className="pr-unit-2">Result format</span>
        <Dropdown>
          <DropdownTrigger>
            <Button color="primary" variant="flat">
              {formatValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={formatValue}
            onSelectionChange={(value) => setFormatValue(value)}
          >
            {Object.values(FORMATS).map((format) => (
              <DropdownItem key={format}>{format}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <ButtonGroup variant="flat" className="my-unit-16 flex justify-center">
        <Button color="secondary" size="lg">
          {labelsMap[selectedOption]}
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button color="secondary" size="lg" isIconOnly>
              <IconArrow />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Upload options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={(key) => setSelectedOption(key as LabelsType)}
            className="max-w-[300px]"
          >
            <DropdownItem key="device" description={descriptionsMap.device}>
              {labelsMap.device}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
};
