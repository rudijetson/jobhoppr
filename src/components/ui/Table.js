export const Table = ({ children, ...props }) => (
    <table {...props} className="min-w-full divide-y divide-gray-200">
      {children}
    </table>
  );
  
  export const TableHeader = ({ children, ...props }) => (
    <thead {...props}>{children}</thead>
  );
  
  export const TableBody = ({ children, ...props }) => (
    <tbody {...props} className="bg-white divide-y divide-gray-200">
      {children}
    </tbody>
  );
  
  export const TableRow = ({ children, ...props }) => (
    <tr {...props}>{children}</tr>
  );
  
  export const TableHead = ({ children, ...props }) => (
    <th {...props} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
  
  export const TableCell = ({ children, ...props }) => (
    <td {...props} className="px-6 py-4 whitespace-nowrap">
      {children}
    </td>
  );
  
  export const TableHeaderCell = ({ children, ...props }) => (
    <th {...props} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );