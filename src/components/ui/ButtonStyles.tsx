export const marketTypeButtonStyles = (isActive: boolean) => `
  flex-1 px-6 py-3 rounded-xl 
  font-medium text-base
  transition-all duration-200 
  shadow-sm hover:shadow-md
  transform hover:-translate-y-0.5
  ${isActive
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700'
  }
`;

export const submitButtonStyles = `
  w-full px-6 py-4 rounded-xl 
  font-medium text-base
  bg-blue-600 text-white
  transition-all duration-200
  shadow-sm hover:shadow-md
  transform hover:-translate-y-0.5
  hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
`;