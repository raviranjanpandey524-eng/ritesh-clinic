# Why `git stash apply stash@{0}` fails in PowerShell

The error is happening because you are running the command in **PowerShell**.

In PowerShell, `@{ ... }` has special meaning for a **hashtable**. So this part:

```powershell
stash@{0}
```

is not passed to Git exactly as written. PowerShell tries to interpret it, and Git ends up receiving a broken argument, which is why you see an error like:

```text
error: unknown switch `e'
```

## Correct command in PowerShell

Wrap the stash reference in quotes:

```powershell
git stash apply 'stash@{0}'
```

You can also use:

```powershell
git stash pop 'stash@{0}'
git stash show 'stash@{0}'
git stash drop 'stash@{0}'
```

## Why quoting fixes it

Quoting tells PowerShell:

"Treat this as plain text, do not interpret `@{}` specially."

Then Git receives the correct stash reference.

## Quick summary

Wrong:

```powershell
git stash apply stash@{0}
```

Right:

```powershell
git stash apply 'stash@{0}'
```

## Extra tip

If you are using `cmd` or Git Bash, the unquoted form often works:

```bash
git stash apply stash@{0}
```

But in **PowerShell**, always prefer quotes around stash references.
