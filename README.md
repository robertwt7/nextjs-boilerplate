# Boilerplate for React project

All you need to make an app for react application

This project is a template starter kit with nextjs. Have `.eslintrc.js` integrated for best practices, also have many other packages to help speed up development.


Development tools installed:
- [Eslint](https://eslint.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Husky](https://github.com/typicode/husky)

Don't forget to add `formatOnSave` if you are using VSCode to format your code on save, makes life so much easier following the `.eslintrc.js` given on the boilerplate. For example:

```
    "[javascript]": {
        "editor.defaultFormatter":"dbaeumer.vscode-eslint",
        "editor.formatOnSave": true
    },
    "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": true,
    },
```

Helpers:
- Formik-material component that is located in `./src/formik-material`, this is a wrapper for `material-ui` to use with `formik`

Packages used here can be find in `setup-dev.sh`:
- [Formik](https://formik.org/) for forms
- [Yup](https://github.com/jquense/yup) for validations
- [React-redux](https://github.com/reduxjs/react-redux)
- [Redux](https://github.com/reduxjs/redux)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [Dayjs](https://github.com/iamkun/dayjs)
- [Axios](https://github.com/axios/axios)
- [Material-ui](https://material-ui.com/)
- [Tailwindcss](https://tailwindcss.com/)


## How It Works
### Forms
We have a `formik` wrapper on used components with a `Material-ui` UI library so it makes it soo easy for you to create forms.

Example form:
```
			<Formik
				enableReinitialize
				initialValues={adminInitialValues}
				onSubmit={handleSubmit}
				validationSchema={validationAdmin}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="grid grid-cols-6 gap-16">
							<FormikPicker
								label="Issue Read"
								className="col-span-6 sm:col-span-3"
								dateTime={false}
								variant="outlined"
								name="issue_read_date"
							/>
							<FormikPicker
								label="Date Resolved"
								className="col-span-6 sm:col-span-3"
								dateTime={false}
								variant="outlined"
								name="resolve_date"
							/>
							<FormikTextField
								className="col-span-6"
								variant="outlined"
								multiline
								rows={5}
								id="action_to_resolve"
								name="action_to_resolve"
								label="Action to resolve"
							/>
							<Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
								Submit
							</Button>
						</div>
					</Form>
				)}
			</Formik>
```

