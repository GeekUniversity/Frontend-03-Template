# 学习笔记
## 1. 使用LL算法构建AST | 四则运算
四则运算词法定义（不包含括号）
- TokenNumber
  - 0, 1, 2, ..., 9的组合
- Operator
  - +, -, *, / 之一
- White space
  - \<SP\>
- LineTerminator
  - \<LF\> \<CR\>

四则运算语法定义（不包含括号，因此不会改变运算优先级，最先计算的是

## 2. 使用LL算法构建AST | 正则表达式
正则表达式的exec(source)可以不断扫描原字符串中的内容。如果匹配到了source中的某个位置，进一步判断该位置匹配到了正则表达式中的哪一个group，然后根据group输出该token的类别（Number, Whitespace, LineTerminator, *, /, +, -)。
## 3. 使用LL算法构建AST | LL词法分析
1. 增加一个判断：如果匹配出来的长度和前进的长度不一致。使用regexp.lastIndex，每次用新生成的lastIndex和旧的lastIndex做比较，如果差值大于匹配出来的长度，那么就认为存在我们不认识的格式。TODO：此处最好有一个例子来说明?
2. 使用yield关键字，将函数变为generator。
## 4. 使用LL算法构建AST | LL语法分析 1
## 5. 使用LL算法构建AST | LL语法分析 2
按照产生式写递归函数，在递归过程中对source[]数组进行规约操作。其中，需要将单独的一个Number看做是特殊的乘法。
