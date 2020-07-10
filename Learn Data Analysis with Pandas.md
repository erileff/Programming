# Learn Data Analysis with Pandas

## Importing Pandas

```python
import pandas as pd
```

## Create a DataFrame

A DataFrame stores data as rows and columns, like a spreadsheet or SQL table.

A dictionary can be passed to `pd.DataFrame()`:

```python
df1 = pd.DataFrame({
  'name': ['John Smith', 'Jane Doe'],
  'address': ['123 Main St.', '456 Maple Ave.'],
  'age': [34, 28]
})
```

Columns appear in alphabetical order because dictionaries don't have inherent order for columns.

A DataFrame can also be created using lists, with the keyword `columns` for a list of column names:

```python
df2 = pd.DataFrame([
    ['John Smith', '123 Main St.', 34],
    ['Jane Doe', '456 Maple Ave.', 28],
],
    columns=['name', 'address', 'age'])
```

## Comma Separated Variables (CSV)

CSV is a text-only spreadsheet format. The first row contains column headings. Each column heading and variable is separated by a comma:

```
column1,column2,column3
value1,value2,value3
```

CSV data can be loaded into a DataFrame:

```python
df = pd.read_csv('my-csv-file.csv')
```

And saved from a DataFrame:

`````python
df.to_csv('new-csv-file.csv')
`````

## Inspect a DataFrame

For larger DataFrames, you can print first 5 rows using `.head()`. Passing a positional argument shows that many rows, i.e. `df.head(10)` shows the first 10 rows.

`df.info()` gives some statistics for each column.

## Select Columns

There are two ways to select columns:

1. Select column as if it were a value in a dictionary; `customers['age']`
2. If column name follows rules for variable names (doesn't start with #, no spaces or special characters, etc.), can select as `customers.age`.

The result of selecting a single column is called a Series.

## Selecting Multiple Columns

````python
new_df = orders[['last_name', 'email']]
````

Selecting multiple rows creates a new DataFrame, not a Series.

## Select Rows

Rows are zero-indexed. This selects the third row of data:

```python
orders.iloc[2]
```

## Selecting Multiple Rows

- `orders.iloc[3:7]` selects rows 3-6
- `orders.iloc[:4]` selects rows 0-3
- `orders.iloc[-3:]` selects rows 3-end (including final row)

## Select Rows with Logic

* `df[df.age == 30]` selects rows where age is 30
* `df[df.age > 30]` selects rows where age is over 30
* `df[df.age < 30]` selects rows where age is under 30
* `df[df.name != 'Clara Oswald']` selects rows where name is not Clara Oswald
* `df[(df.age < 30) | (df.name == 'Martha Jones')]` selects rows where age is under 30 *or* name is Martha Jones
* `df[df.name.isin(['Martha Jones', 'Rose Tyler', 'Amy Pond'])]` selects rows where name is any of those in list

## Setting Indices

When we select a subset of rows, we end up with non-consecutive indices. We can find this using `reset_index()`. `df.reset_index(drop=True)` doesn't include a new column with old indices.

# Modifying DataFrames

## Adding a Column

```python
df['Quantity'] = [100, 150, 50, 35]
```

```python
df['In Stock?'] = True
# assigns True to every row
```

```python
df['Sales Tax'] = df.Price * 0.075
# calculates sales tax for each row
```

## Performing Column Operations

`apply()` can be used to apply a function to every value in a column.

```python
from string import upper
df['Name'] = df.Name.apply(upper)
```

## Lambda Function

Lambda functions are defined in a single line of code and are usually assigned a variable.

````python
mylambda = lambda x: (x * 2) + 3
print(mylambda(5))
# 13
````

```python
mylambda = lambda str: str[0] + str[-1:]
print(mylambda('Hello'))
# Ho
```

## Lambda Function If Statements

```python
myfunction = lambda x: 40 + (x - 40) * 1.50 if x > 40 else x

# lambda x: [OUTCOME IF TRUE] if [CONDITIONAL] else [OUTCOME IF FALSE]
```

## Renaming Columns

```python
df = pd.DataFrame({
    'name': ['John', 'Jane', 'Sue', 'Fred'],
    'age': [23, 29, 21, 18]
})
df.columns = ['First Name', 'Age']
```

```python
df = pd.DataFrame({
    'name': ['John', 'Jane', 'Sue', 'Fred'],
    'age': [23, 29, 21, 18]
})
df.rename(columns={
    'name': 'First Name',
    'age': 'Age'},
    inplace=True)
```

