import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { UploadImage } from '@/partials/upload-image/upload-image';

export const Container = () => {
  return (
    <div className="mt-unit-6 flex flex-col">
      <Tabs aria-label="Options" color="primary">
        <Tab key="converter" title="Converter">
          <Card>
            <CardBody>
              <UploadImage />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="settings" title="Settings">
          <Card>
            <CardBody>Settings...</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
