## Commmit message Convention

### 1 Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### 2 Message subject(first line)

Contains succinct description of the change.  
Cannot be longer than 70 characters.  

#### 2.1 Allowed <type> Values

* feat(feature): new feature for production.

* fix(bug fix): bug fix for production.

* refactor: improving, linting, refactoring production code.

* docs(documentation): changes to the documentation.

* test: adding tests, refactoring tests.

* style: formatting, typo, etc.

* chore: maintain, dev tools, scafolding tools, etc.

#### 2.2 The `<scope>`

Scope could be anything specifying place of the commit change.  
If the change is global or difficult to assign to a single component, the `<scope>` can be empty.  

#### 2.3 `<subject>` Text

* use imperative, present tense
* don't capitalize first letter
* no dot (.) at the end

### 3 Message body

More detailed explanatory text, if necessary.  
Wrap it to 80 characters.  

### 4 Message footer
Either breaking changes or referencing closed issues.  
Wrap it to 80 characters.  

#### 4.1 Breaking Changes

All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes.  
the `BREAKING CHANGE` or `BREAKING CHANGES` should always be uppercase.  

```
BREAKING CHANGE:
`port-runner` command line option has changed to `runner-port`, so that it is
consistent with the configuration file syntax.
To migrate your project, change all the commands, where you use `--port-runner`
to `--runner-port`.
```

#### 4.2 Referencing Issues

Closed issues should be listed on a separate line in the footer prefixed with "Closes" keyword like this:  

```
Closes:
#234
```

or in case of multiple issues:

```
Closes:
#123, #245, #992
```

### 5 Examples

```
feat($browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

BREAKING CHANGE:
$browser.onHashChange, which was removed (use onUrlChange instead)
```

```
feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

New directives for proper binding these attributes in older browsers (IE).
Added coresponding description, live examples and e2e tests.

Closes #351
```
