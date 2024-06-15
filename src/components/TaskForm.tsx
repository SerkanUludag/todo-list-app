import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { uniqueId } from 'lodash';

const { Option } = Select;

interface TaskFormProps {
  visible: boolean;
  onCreate: (task: any) => void;
  onCancel: () => void;
  statuses: string[];
}

const TaskForm: React.FC<TaskFormProps> = ({
  visible,
  onCreate,
  onCancel,
  statuses,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create a new task"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate({ ...values, id: uniqueId() });
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Please input the title of the task!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input the description of the task!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="assignee"
          label="Assignee"
          rules={[
            {
              required: true,
              message: 'Please input the assignee of the task!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: 'Please select the status of the task!',
            },
          ]}
        >
          <Select>
            {statuses.map((status) => (
              <Option key={status} value={status}>
                {status}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskForm;
