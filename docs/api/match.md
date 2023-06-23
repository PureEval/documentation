# Match {#match-api}

## match() {#match}

进行模式匹配

-   **Type**

$$a\rightarrow (a\rightarrow b)\rightarrow a \rightarrow (a\rightarrow c) \rightarrow ... \rightarrow a \rightarrow *$$

-   **Details**

传入偶数个参数，每两个参数被认为是一对匹配规则（记为 $r_i$ 与 $f_i$，其中 $r_i$ 为一个值或函数，$f_i$ 为一个单元函数）。

而返回值为一个接受一个参数的单元函数（其参数记为 $v$），进行模式匹配。

对于每对匹配规则从上到下匹配，如果 $v$ 与 $r_i$ 相等，则将执行 $f_i$ 传入 $v$ 并返回其结果。

特别的，如果 $r_i$ 为一个单元函数，则 $v$ 将作为参数传入其中，若其返回值为 `true`，则匹配成功，否则匹配失败。

另外，如果匹配到的是一个列表，则 $f_i$ 可以是三元函数，第一个参数为原列表，第二个参数为原列表的第一个元素，第三个参数为原列表去除第一个元素后的列表。

附加的，如果 $f_i$ 为一个字面值，则 $f_i$ 的语义为一个返回该字面值的常函数。

还可以使用占位符 [\_](/api/placeholder.html#_) 表示任意值传入都可以匹配成功，而对于 $Array$ 和 $Object$ 的匹配亦可。

目前支持匹配的类型：字面值，$Maybe$，$Array$，$Object$。

-   **Example**

```js
const sort = match(
    [], [],
    _ , (a, x, s) => [...sort(filter(lte(x), s)), x, ...sort(filter(gt(x), s))]
);

const fib = match(
    1, 1,
    2, 2,
    _, (v) => fib(v-1) + fib(v-2)
);


/*
(In Haskell)
Data Square = Round x y r
Square :: Round -> Number
Square Round x y r = 3.14 * r * r
Square _ = "Error" 
*/
Object.assign(global, Data('Round x y r'));
const Square = match(
	eqData(
        Round, {
		    x: _,
		    y: _,
		    r: _
	    }
    ), (v) => 3.14 * v.r ** 2,
	_, 'Error'
);

const maybeFoo = match(
    Just("homo"), id,
    Nothing,      "Nothing",
    _,            "Others"
);

const check = (obj) => obj.homo ? true : false;
const homoInside = match(
    check, "Yes",
    _,     "No"
);

const objectFoo = match(
    { homo: "Yes" }, "Yes",
    _,               "No"
);

const autoFoo = match(
    { a: _, b: [_, 1, _, 2, _, 3] }, "Yes",
    _,                               "No"
);
```