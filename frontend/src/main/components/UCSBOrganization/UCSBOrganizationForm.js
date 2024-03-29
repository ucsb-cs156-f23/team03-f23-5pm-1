import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function OrganizationForm({
  initialContents,
  submitAction,
  buttonLabel = "Create",
}) {
  // Stryker disable all
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: initialContents || {} });
  // Stryker restore all

  const navigate = useNavigate();

  const testIdPrefix = "OrganizationForm";

  return (
    <Form onSubmit={handleSubmit(submitAction)}>
      {initialContents && (
        <Form.Group className="mb-3">
          <Form.Label htmlFor="id">Id</Form.Label>
          <Form.Control
            data-testid={testIdPrefix + "-id"}
            id="id"
            type="text"
            {...register("id")}
            value={initialContents.id}
            disabled
          />
        </Form.Group>
      )}
      {/* For orgcode */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgCode">orgCode</Form.Label>
        <Form.Control
          data-testid={testIdPrefix + "-orgCode"}
          id="orgCode"
          type="text"
          isInvalid={Boolean(errors.name)}
          {...register("orgCode", {
            required: "orgCode is required.",
            maxLength: {
              value: 30,
              message: "Max length 30 characters",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.orgCode?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For orgTranslationShort */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgTranslationShort">
          orgTranslationShort
        </Form.Label>
        <Form.Control
          data-testid={testIdPrefix + "-orgTranslationShort"}
          id="orgTranslationShort"
          type="text"
          isInvalid={Boolean(errors.description)}
          {...register("orgTranslationShort", {
            required: "orgTranslationShort is required.",
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.orgTranslationShort?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For orgTranslation */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="orgTranslation">orgTranslation</Form.Label>
        <Form.Control
          data-testid={testIdPrefix + "-orgTranslation"}
          id="orgTranslation"
          type="text"
          isInvalid={Boolean(errors.description)}
          {...register("orgTranslation", {
            required: "orgTranslation is required.",
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.orgTranslation?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* For Inactive */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="inactive">inactive</Form.Label>
        <Form.Control
          data-testid={testIdPrefix + "-inactive"}
          id="inactive"
          type="text"
          isInvalid={Boolean(errors.description)}
          {...register("inactive", {
            required: "inactive is required.",
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.inactive?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" data-testid={testIdPrefix + "-submit"}>
        {buttonLabel}
      </Button>

      <Button
        variant="Secondary"
        onClick={() => navigate(-1)}
        data-testid={testIdPrefix + "-cancel"}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default OrganizationForm;
