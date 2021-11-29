export const a = '';
// import { ComponentStory, Meta, Story } from '@storybook/react';
// import { useState } from 'react';

// import { StyledWrapper } from '../Stories.styled';
// import { Select as SelectComponent } from './Select';
// import { SelectItemBase, SelectProps } from './Select.types';

// const defaultItems: SelectItemBase[] = Array.from({
//   length: 20,
// }).map((_, i) => ({
//   value: String(i),
//   label: `Label #${i + 1}`,
// }));

// export default {
//   component: SelectComponent,
//   title: 'Select/Select',
//   args: {
//     label: 'Label',
//     isDisabled: false,
//     hasError: false,
//     items: defaultItems,
//   },
// } as Meta;

// // const Template: Story<SelectProps<SelectItemBase>> = (args) => (
// //   <StyledWrapper>
// //     <SelectComponent {...args} />
// //   </StyledWrapper>
// // );

// // export const Select = Template.bind({});
// // Select.args = {

// //   // disabled: false,
// //   // hasError: false,
// //   // placeholder: 'Placeholder',
// //   // label: 'Label',
// // };
// export const Select: ComponentStory<React.FC<SelectProps<SelectItemBase>>> = ({
//   ...props
// }) => {
//   const [selectedItem, setSelectedItem] = useState<SelectItemBase | null>(null);

//   return (
//     <StyledWrapper>
//       <SelectComponent
//         {...props}
//         selectedItem={selectedItem}
//         onChange={(item) => setSelectedItem(item)}
//       />
//     </StyledWrapper>
//   );
// };
