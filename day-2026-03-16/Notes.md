Câu hỏi tự kiểm tra
1. jsx không phải html mà nó là React.createElement
ví dụ, const element = <h1>Hello, Joe!</h1>;
↓ Babel compile thành:
const element = React.createElement('h1', null, 'Hello, Joe!');

2. Nếu không viết hoa sẽ bị hiểu nhầm thành HTML tag

3. usestate(0) trả về giá trị ban đầu là bằng 0
destructure:
thực chất usestate(0) là gán temp cho biến state ban đầu là bằng 0;

4. onClick={handleClick()}   sẽ bị gọi ngay khi render web do không được bọc ở trong ngoặc và trỏ mũi tên, do đó nó sẽ chạy ngay mà không cần onclick
5. todos.push(newTodo); setTodos(todos) sửa trực tiếp state cũ

push() làm thay đổi luôn mảng ban đầu. Tức là todos trước và sau vẫn là cùng 1 reference trong bộ nhớ. mà react thường so sánh kiểu:state cũ và state mới. Nếu nó thấy vẫn là cùng mảng cũ, React có thể không re-render như mong đợi.

6. key giúp React phân biệt từng phần tử trong list.
giả sử có list:
A B C
Xóa A đi, nếu không có key, React có thể nhầm:
B thành A cũ
C thành B cũ
=> UI có thể bị lệch state

7. Là input mà giá trị của nó được điều khiển bởi React state.
cần cả value và onChange vì phải có 2 chiều:
State => Input
nhờ value
Input => State
nhờ onChange

8. Lifting state up là đưa state từ component con lên component cha chung để nhiều component có thể dùng chung dữ liệu đó.
Nếu mỗi component tự giữ state riêng thì dữ liệu sẽ không đồng bộ.
