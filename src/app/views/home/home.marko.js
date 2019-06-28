// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node-casa-do-codigo$1.0.0/src/app/views/home/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  var for__4 = 0;

  marko_forEach(data.desenvolvedor, function(desenvolvedor) {
    var keyscope__5 = "[" + ((for__4++) + "]");

    out.w("<h1>Bem vindo a Casa do Código " +
      marko_escapeXml(desenvolvedor.nome) +
      " </h1>");
  });

  out.w("<a href=\"/livros\">listar livros disponiveis</a><br><a href=\"/livros/adcionar-livro\"> adcionar novo livro</a>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "10");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node-casa-do-codigo$1.0.0/src/app/views/home/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
