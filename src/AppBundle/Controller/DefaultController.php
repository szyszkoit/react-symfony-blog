<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/api/{slug}", name="API")
     */
    public function apiAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        // Symfony Backend integration
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/{slug}", name="homepage2")
     */
    public function indexAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir') . '/..') . DIRECTORY_SEPARATOR,
        ]);
    }


    /**
     * @Route("/loginPage", name="loginPage")
     */
    public function login(Request $request)
    {
        $req = $request->request->all();

        $req = json_decode($req["conversation"], true);

        if (isset($req)) {

            $returnData = array("status" => "OK");
            return new Response(json_encode($returnData, true), 200);


        }
    }
}